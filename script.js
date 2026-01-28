const apiKeyInput = document.getElementById("apiKeyInput");
const gameSelect = document.getElementById("gameSelect");
const questionInput = document.getElementById("questionInput");
const askButton = document.getElementById("askButton");
const aiResponse = document.getElementById("aiResponse");
const form = document.getElementById("form");

const markdownToHtml = (text) => {
    const converter = new showdown.Converter(); 
    return converter.makeHtml(text);
}; 

const perguntarAI = async (question, game, apiKey) => {
    const model = "gemini-2.5-flash";

    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    
    const prompt = `
        ## Especialidade
        Voce é um especialista assistente em ${game}

        #Tarefa
        Voce deve responder as perguntas do usuário com base no seu conhecimento do jogo,
        estratégias, builds e dicas

        ##Regras
        - Se voce não sabe a resposta, não tente inventar uma, só responda com "Não sei".
        - Se a pergunta não esta relacionada com o jogo, responda com "Essa pergunta não está relacionada ao jogo".
        - Considere a data atual ${new Date().toLocaleDateString("pt-BR")}.
        - Faça pesquisas atualizadas sobre o patch atual, baseada na data atual, para dar uma resposta coerente.
        - Nunca responda itens que voce não tenha certeza que existem no patch atual.

        ##Resposta
        - Economize na resposta, seja direto e responda no máximo 500 caracteres.
        - Responda em Markdown.
        - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário quer.

        ##Exemplo de resposta
        Pergunta do usuário: "Melhor build Rengar Jungle"
        Resposta: "A build mais atual é: \n\n **Itens: ** \n\n" coloque os itens aqui. \n\n **Runas**: \n\n exemplo de runas aqui \n\n"
    
        ---

        Aqui está a pergunta do usuário: ${question}
        `;

    const contents = [{ 
        role: "user",
        parts: [{
            text: prompt
        }]
    }]

    const tools = [{
        google_search: {} 
    }];

    const response = await fetch(geminiURL, { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
            contents,
            tools
        })
    });

    const data = await response.json();

    return data.candidates[0].content.parts[0].text; 
}

const enviarFormulario = async (event) => { 
    event.preventDefault();
    const apiKey = apiKeyInput.value;
    const game = gameSelect.value;
    const question = questionInput.value;

    if (apiKey == "" || game == "" || question == "") {
        alert("Por favor preencha todos os campos")
        return;
    }

    askButton.disabled = true;
    askButton.textContent = "Perguntando..."; 
    askButton.classList.add("loading");

    try {
        const text = await perguntarAI(question, game, apiKey);
        aiResponse.querySelector(".response-content").innerHTML = markdownToHtml(text);
        aiResponse.classList.remove("hidden"); 
    } catch (error){
        console.log("Erro: ", error);
    } finally { 
        askButton.disabled = false;
        askButton.textContent = "Perguntar";
        askButton.classList.remove("loading");
    }
}

form.addEventListener("submit", enviarFormulario);