const jobs=[
    {
        id: 1,
        title: "Systemsäkerhetsingenjör inom Funchtional Safety",
        företag: "Agile Resources AB",
        ort: "Linköping",
        kategori: " IT Säkerhetsingenjör",
        Detalj : "Arbetar med systemsäkerhet och Functional Safety."
    },
    {
        id: 2,
        title: "Senior Accounting Manager-Centraleuropa",
        företag: "Agile Resources AB",
        location: "Göteborg",
        kategori: "Maneger",
        detalj: "Ansvarar för ekonomisk styrning och redovisning."
    },
    {
      id: 3,
        title: "Security Engineer, Corporate",
        företag: "lovable Labs Sweden AB",
        location: "Stockholm",
        kategori: "IT-säkerhetstekniker",
        detalj: "."   
    },
    {
    id: 4,
        title: "Technical Solutions Engineer",
        företag: "Academic Work Sweden AB",
        location: "Stockholm",
        kategori: "Supporttekniker",
        detalj: "Avancerad teknisk support."   
    },
    {
    id: 5,
        title: "IT-supporttekniker till Quest consulting.",
        företag: "Quest consulting Sverige AB",
        location: "Stockholm",
        kategori: "Supportttekniker",
        detalj: "Rollen som support-tekniker innebär primärt att ta emot och lösa incidenter och beställningar."  
    },
    {id: 6,
        title: "Säkerhetsskyddsspecialist till myndighet",
        företag: "Future People AB",
        location: "Stockholm",
        kategori: "Säkerhetsadministratör IT",
        detalj: "en säkerhetsskyddsspecialist till vår kund i Sundbyberg."  
    },
    {
    id: 7,
        title: "Säkerhetsanalytiker",
        företag: "Uppsala Universitet",
        location: "Uppsara",
        kategori: "IT-säkerhetstekniker",
        detalj: "På Säkerhetsavdelningen har vi bred kompetens och ett brinnande intresse inom området"  
    },
    {
    id: 8,
        title: "Enhetschef It-arkitektur och it-säkerhet till Sveriges lantbruksuniversitet",
        företag: "lSveriges lantbruksuniversitet",
        location: "Uppsala",
        kategori: "IT-säkerhetsansvarigr",
        detalj: "Som enhetschef har du personal- och budgetansvar för enheten och ingår i ledningsgruppen för IT-avdelningen."  
    }
]

const jobblista = document.getElementById("jobb-lista");
function visajobb(alljobb){
    jobblista.innerHTML=""; // ändra innehåll i jobblista

    alljobb.forEach(jobb => {
        jobblista.innerHTML +=
        <Selection class ="jobbobjekt">
            <h2>${jobb.title}</h2>
            <p>${jobb.företag}</p>
            <p>${jobb.location}</p>
            <p>${jobb.kategori}</p>
            <p>${jobb.detalj}</p>
            <buttom>Spara annons</buttom>
        </Selection>


    });
}
visajobb(jobs);