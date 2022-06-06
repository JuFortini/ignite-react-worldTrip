import { createServer, Model } from "miragejs";

export function makeServer() {

  const server = createServer({
    models: {
      city: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/cities", () => [
        {
          id: "1",
          city: "Hong Kong", 
          image: "https://images.unsplash.com/photo-1594973782943-3314fe063f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
          country: "China", 
          countryInicials: "CN", 
          continent: "Ásia" 
        },
        { 
          id: "2", 
          city: "Bangkok", 
          image: "https://images.unsplash.com/photo-1593948223686-9f8ea5c55102?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          country: "Tailândia",
          countryInicials: "TH", 
          continent: "Ásia" 
        },
        { 
          id: "3", 
          city: "Londres",
          image: "https://images.unsplash.com/photo-1598875791852-8bb153e713f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80", 
          country: "Inglaterra",
          countryInicials: "GB", 
          continent: "Europa" 
        },
        { 
          id: "4", 
          city: "Macau",
          image: "https://images.unsplash.com/photo-1634552952414-a4c7844aa458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Macau",
          countryInicials: "MO", 
          continent: "Ásia" 
        },
        { 
          id: "5", 
          city: "Singapura",
          image: "https://images.unsplash.com/photo-1574227492706-f65b24c3688a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
          country: "Singapura", 
          countryInicials: "SG",
          continent: "Ásia" 
        },
        { 
          id: "6", 
          city: "Paris",
          image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
          country: "França",
          countryInicials: "FR", 
          continent: "Europa" 
        },
        { 
          id: "7", 
          city: "Dubai",
          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Emirados Árabes", 
          countryInicials: "AE",
          continent: "Ásia" 
        },
        { 
          id: "8", 
          city: "Nova York", 
          image: "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
          country: "Estados Unidos", 
          countryInicials: "US",
          continent: "América do Norte" 
        },
        { 
          id: "9", 
          city: "Kuala Lampur", 
          image: "https://images.unsplash.com/photo-1599234379743-2b7855a8f39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          country: "Malásia",
          countryInicials: "MY", 
          continent: "Ásia" 
        },
        { 
          id: "10", 
          city: "Istambul",
          image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1134&q=80", 
          country: "Turquia",
          countryInicials: "TR", 
          continent: "Europa" 
        },
        { 
          id: "11", 
          city: "Déli",
          image: "https://images.unsplash.com/photo-1592304377960-4ae22286a345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
          country: "Índia",
          countryInicials: "IN", 
          continent: "Ásia" 
        },
        { 
          id: "12", 
          city: "Antália",
          image: "https://images.unsplash.com/photo-1593238739364-18cfde30e522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1340&q=80", 
          country: "Turquia",
          countryInicials: "TR", 
          continent: "Ásia" 
        },
        { 
          id: "13", 
          city: "Shenzhen",
          image: "https://images.unsplash.com/photo-1522614288668-a697127e9b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "China",
          countryInicials: "CN", 
          continent: "Ásia" 
        },
        { 
          id: "14", 
          city: "Mumbai",
          image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80", 
          country: "Índia",
          countryInicials: "IN", 
          continent: "Ásia" 
        },
        { 
          id: "15", 
          city: "Phuket",
          image: "https://images.unsplash.com/photo-1629342654763-e6ac1bcb0917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Tailândia",
          countryInicials: "TH", 
          continent: "Ásia" 
        },
        { 
          id: "16", 
          city: "Roma",
          image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Itália",
          countryInicials: "IT", 
          continent: "Europa" 
        },
        { 
          id: "17", 
          city: "Tóquio",
          image: "https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80", 
          country: "Japão",
          countryInicials: "JP", 
          continent: "Ásia" 
        },
        { 
          id: "18", 
          city: "Pattaya",
          image: "https://images.unsplash.com/photo-1625622122109-d65fc8f46a9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Tailândia",
          countryInicials: "TH", 
          continent: "Ásia" 
        },
        { 
          id: "19", 
          city: "Taipei",
          image: "https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", 
          country: "Taiwan",
          countryInicials: "TW", 
          continent: "Ásia" 
        },
        { 
          id: "20", 
          city: "Meca",
          image: "https://images.unsplash.com/photo-1588875988268-9a14db05f39b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Arábia Saudita",
          countryInicials: "SA", 
          continent: "Ásia" 
        },
        { 
          id: "21", 
          city: "Guangzhou",
          image: "https://images.unsplash.com/photo-1544594376-0a9a6ae2c997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1503&q=80", 
          country: "China",
          countryInicials: "CN", 
          continent: "Ásia" 
        },
        { 
          id: "22", 
          city: "Praga",
          image: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "República Tcheca",
          countryInicials: "CZ", 
          continent: "Europa" 
        },
        { 
          id: "23", 
          city: "Medina",
          image: "https://images.unsplash.com/photo-1575225761128-eb856eed1156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Arábia Saudita",
          countryInicials: "SA", 
          continent: "Ásia" 
        },
        { 
          id: "24", 
          city: "Seoul",
          image: "https://images.unsplash.com/photo-1575391304128-f11964816ef6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", 
          country: "Coréia do Sul",
          countryInicials: "KR", 
          continent: "Ásia" 
        },
        { 
          id: "25", 
          city: "Amsterdã",
          image: "https://images.unsplash.com/photo-1581460436937-81f19e138de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
          country: "Holanda",
          countryInicials: "NL", 
          continent: "Europa" 
        },
        { 
          id: "26", 
          city: "Agra",
          image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
          country: "Índia",
          countryInicials: "IN", 
          continent: "Ásia" 
        },
        { 
          id: "27", 
          city: "Miami",
          image: "https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
          country: "Estados Unidos",
          countryInicials: "US", 
          continent: "América do Norte" 
        },
        { 
          id: "28", 
          city: "Osaka",
          image: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
          country: "Japão",
          countryInicials: "JP", 
          continent: "Ásia" 
        },
        { 
          id: "29", 
          city: "Los Angeles",
          image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Estados Unidos",
          countryInicials: "US", 
          continent: "América do Norte" 
        },
        { 
          id: "30", 
          city: "Xangai",
          image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "China",
          countryInicials: "CN", 
          continent: "Ásia" 
        },
        { 
          id: "31", 
          city: "Ho Chi Minh",
          image: "https://images.unsplash.com/photo-1598544919456-fcb105fa7a6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80", 
          country: "Vietnã",
          countryInicials: "VN", 
          continent: "Ásia" 
        },
        { 
          id: "32", 
          city: "Dempassar",
          image: "https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Indonésia",
          countryInicials: "ID", 
          continent: "Ásia" 
        },
        { 
          id: "33", 
          city: "Barcelona",
          image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
          country: "Espanha",
          countryInicials: "ES", 
          continent: "Europa" 
        },
        { 
          id: "34", 
          city: "Las Vegas",
          image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Estados Unidos",
          countryInicials: "US", 
          continent: "América do Norte" 
        },
        { 
          id: "35", 
          city: "Milão",
          image: "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80", 
          country: "Itália",
          countryInicials: "IT", 
          continent: "Europa" 
        },
        { 
          id: "36", 
          city: "Chennai",
          image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Índia",
          countryInicials: "IN", 
          continent: "Ásia" 
        },
        { 
          id: "37", 
          city: "Viena",
          image: "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80", 
          country: "Áustria",
          countryInicials: "AT", 
          continent: "Europa" 
        },
        { 
          id: "38", 
          city: "Johor Bahru",
          image: "https://images.unsplash.com/photo-1518354976790-1e2feeac3f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
          country: "Malásia",
          countryInicials: "MY", 
          continent: "Ásia" 
        },
        { 
          id: "39", 
          city: "Jaipur",
          image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Índia",
          countryInicials: "IN", 
          continent: "Ásia" 
        },
        { 
          id: "40", 
          city: "Cancun",
          image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80", 
          country: "México",
          countryInicials: "MX", 
          continent: "América do Norte" 
        },
        { 
          id: "41", 
          city: "Berlim",
          image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Alemanha",
          countryInicials: "DE", 
          continent: "Europa" 
        },
        { 
          id: "42", 
          city: "Cairo",
          image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170", 
          country: "Egito",
          countryInicials: "EG", 
          continent: "África" 
        },
        { 
          id: "43", 
          city: "Atenas",
          image: "https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Grécia",
          countryInicials: "GR", 
          continent: "Europa" 
        },
        { 
          id: "44", 
          city: "Orlando",
          image: "https://images.unsplash.com/photo-1634221558053-3a617b5201d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80", 
          country: "Estados Unidos",
          countryInicials: "US", 
          continent: "América do Norte" 
        },
        { 
          id: "45", 
          city: "Moscou",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Rússia",
          countryInicials: "RU", 
          continent: "Europa" 
        },
        { 
          id: "46", 
          city: "Veneza",
          image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Itália",
          countryInicials: "IT", 
          continent: "Europa" 
        },
        { 
          id: "47", 
          city: "Madri",
          image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Espanha",
          countryInicials: "ES", 
          continent: "Europa" 
        },
        { 
          id: "48", 
          city: "Ha Long",
          image: "https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Vietnã",
          countryInicials: "VN", 
          continent: "Ásia" 
        },
        { 
          id: "49", 
          city: "Riade",
          image: "https://images.unsplash.com/photo-1506795213373-430e921fe2ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Arábia Saudita",
          countryInicials: "SA", 
          continent: "Ásia" 
        },
        { 
          id: "50", 
          city: "Dublin",
          image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Irlanda",
          countryInicials: "IE", 
          continent: "Europa" 
        },
        { 
          id: "51", 
          city: "Florença",
          image: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80", 
          country: "Itália",
          countryInicials: "IT", 
          continent: "Europa" 
        },
        { 
          id: "52", 
          city: "Hanói",
          image: "https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Vietnã",
          countryInicials: "VN", 
          continent: "Ásia" 
        },
        { 
          id: "53", 
          city: "Toronto",
          image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Canadá",
          countryInicials: "CA", 
          continent: "América do Norte" 
        },
        { 
          id: "54", 
          city: "Joanesburgo",
          image: "https://images.unsplash.com/photo-1602578984228-c98a9b995f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "África do Sul",
          countryInicials: "ZA", 
          continent: "África" 
        },
        { 
          id: "55", 
          city: "Sydnei",
          image: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
          country: "Austrália",
          countryInicials: "AU", 
          continent: "Oceania" 
        },
        { 
          id: "56", 
          city: "Munique",
          image: "https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Alemanha",
          countryInicials: "DE", 
          continent: "Europa" 
        },
        { 
          id: "57", 
          city: "Jakarta",
          image: "https://images.unsplash.com/photo-1617687611017-48db8d42fd8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Indonésia",
          countryInicials: "ID", 
          continent: "Ásia" 
        },
        { 
          id: "58", 
          city: "Pequim",
          image: "https://images.unsplash.com/photo-1614052153442-4595f3d3d6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1381&q=80", 
          country: "China",
          countryInicials: "CN", 
          continent: "Ásia" 
        },
        { 
          id: "59", 
          city: "São Petersburgo",
          image: "https://images.unsplash.com/photo-1558682325-7cf48d328e34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80", 
          country: "Rússia",
          countryInicials: "RU", 
          continent: "Europa" 
        },
        { 
          id: "60", 
          city: "Bruxelas",
          image: "https://images.unsplash.com/photo-1581161424127-30b1f7eee75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80", 
          country: "Bégica",
          countryInicials: "BE", 
          continent: "Europa" 
        },
        { 
          id: "61", 
          city: "Jerusalém",
          image: "https://images.unsplash.com/photo-1614517453351-6c1522fc7a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Israel",
          countryInicials: "IL", 
          continent: "Ásia" 
        }, 
        { 
          id: "62", 
          city: "Budapeste",
          image: "https://images.unsplash.com/photo-1610752400564-c97cbbb5cfba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
          country: "Hungria",
          countryInicials: "HU", 
          continent: "Europa" 
        },
        { 
          id: "63", 
          city: "Lisboa",
          image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80", 
          country: "Portugal",
          countryInicials: "PT", 
          continent: "Europa" 
        },
        { 
          id: "64", 
          city: "Dammam",
          image: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80", 
          country: "Arábia Saudita",
          countryInicials: "SA", 
          continent: "Ásia" 
        },
        { 
          id: "65", 
          city: "Ilha de Penang",
          image: "https://images.unsplash.com/photo-1593333985246-74d2c8ea3fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Malásia",
          countryInicials: "MY", 
          continent: "Ásia" 
        },
        { 
          id: "66", 
          city: "Heraclião",
          image: "https://images.unsplash.com/photo-1555786931-14338ece2a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", 
          country: "Grécia",
          countryInicials: "GR", 
          continent: "Europa" 
        },
        { 
          id: "67", 
          city: "Kyoto",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Japão",
          countryInicials: "JP", 
          continent: "Ásia" 
        },
        { 
          id: "68", 
          city: "Zhuhai",
          image: "https://images.unsplash.com/photo-1568001731724-c868c383b0c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80", 
          country: "China",
          countryInicials: "CN", 
          continent: "Ásia" 
        },
        { 
          id: "69", 
          city: "Vancouver",
          image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1218&q=80", 
          country: "Canadá",
          countryInicials: "CA", 
          continent: "América do Norte" 
        },
        { 
          id: "70", 
          city: "Chiang Mai",
          image: "https://images.unsplash.com/photo-1597629008285-a10132d20913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Tailândia",
          countryInicials: "TH", 
          continent: "Ásia" 
        },       
        { 
          id: "71", 
          city: "Copenhague",
          image: "https://images.unsplash.com/photo-1611515905024-d6530366c87c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
          country: "Dinamarca",
          countryInicials: "DK", 
          continent: "Europa" 
        },
        { 
          id: "72", 
          city: "São Francisco",
          image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
          country: "Estados Unidos",
          countryInicials: "US", 
          continent: "América do Norte" 
        },
        { 
          id: "73", 
          city: "Melbourne",
          image: "https://images.unsplash.com/photo-1596527199903-6cdaacee1208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80", 
          country: "Austrália",
          countryInicials: "AU", 
          continent: "Oceania" 
        },
        { 
          id: "74", 
          city: "Cracóvia",
          image: "https://images.unsplash.com/photo-1562050380-55da3bae840c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Polônia",
          countryInicials: "PL", 
          continent: "Europa" 
        },
        { 
          id: "75", 
          city: "Marraquexe",
          image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1224&q=80", 
          country: "Marrocos",
          countryInicials: "MA", 
          continent: "África" 
        },
        { 
          id: "76", 
          city: "Calcutá",
          image: "https://images.unsplash.com/photo-1558431382-9b06d0507edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
          country: "Índia",
          countryInicials: "IN", 
          continent: "Ásia" 
        },
        { 
          id: "77", 
          city: "Cebu",
          image: "https://images.unsplash.com/photo-1582636675488-43c06d4f8d19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
          country: "Filipinas",
          countryInicials: "PH", 
          continent: "Ásia" 
        },
        { 
          id: "78", 
          city: "Auckland",
          image: "https://images.unsplash.com/photo-1595125990323-885cec5217ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Nova Zelândia",
          countryInicials: "NZ", 
          continent: "Oceania" 
        },
        { 
          id: "79", 
          city: "Tel Aviv",
          image: "https://images.unsplash.com/photo-1606063028305-2741fe7b777e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
          country: "Israel",
          countryInicials: "IL", 
          continent: "Ásia" 
        },
        { 
          id: "80", 
          city: "Guilin",
          image: "https://images.unsplash.com/photo-1636964886908-7b28097bc746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
          country: "China",
          countryInicials: "CN", 
          continent: "Ásia" 
        },
        { 
          id: "81", 
          city: "Honolulu",
          image: "https://images.unsplash.com/photo-1573992554018-83e7853bd45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80", 
          country: "Estados Unidos",
          countryInicials: "US", 
          continent: "América do Norte" 
        },
        { 
          id: "82", 
          city: "Hurgada",
          image: "https://images.unsplash.com/photo-1622912058761-d34ff2d6eede?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Egito",
          countryInicials: "EG", 
          continent: "África" 
        },
        { 
          id: "83", 
          city: "Varsóvia",
          image: "https://images.unsplash.com/photo-1607427293702-036933bbf746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
          country: "Polônia",
          countryInicials: "PL", 
          continent: "Europa" 
        },
        { 
          id: "84", 
          city: "Mugla",
          image: "https://images.unsplash.com/photo-1600194795031-e8c60926db4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
          country: "Turquia",
          countryInicials: "TR", 
          continent: "Europa" 
        },
        { 
          id: "85", 
          city: "Buenos Aires",
          image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Argentina",
          countryInicials: "AR", 
          continent: "América do Sul" 
        },
        { 
          id: "86", 
          city: "Chiba",
          image: "https://images.unsplash.com/flagged/photo-1577963538466-2fdaeaf08263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80", 
          country: "Japão",
          countryInicials: "JP", 
          continent: "Ásia" 
        },
        { 
          id: "87", 
          city: "Frankfurt",
          image: "https://images.unsplash.com/photo-1617934276076-ec9239067428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Alemanha",
          countryInicials: "DE", 
          continent: "Europa" 
        },
        { 
          id: "88", 
          city: "Estocolmo",
          image: "https://images.unsplash.com/photo-1588653818221-2651ec1a6423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
          country: "Suécia",
          countryInicials: "SE", 
          continent: "Europa" 
        },
        { 
          id: "89", 
          city: "Lima",
          image: "https://images.unsplash.com/photo-1580530719837-952e0515b69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Peru",
          countryInicials: "PE", 
          continent: "América do Sul" 
        },
        { 
          id: "90", 
          city: "Da Nang",
          image: "https://images.unsplash.com/photo-1560964645-5296b5099677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Vietnã",
          countryInicials: "VN", 
          continent: "Ásia" 
        },
        { 
          id: "91", 
          city: "Batam",
          image: "https://images.unsplash.com/photo-1629643570024-e6062c016143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Indonésia",
          countryInicials: "ID", 
          continent: "Ásia" 
        },
        { 
          id: "92", 
          city: "Nice",
          image: "https://images.unsplash.com/photo-1491166617655-0723a0999cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "França",
          countryInicials: "FR", 
          continent: "Europa" 
        },
        { 
          id: "93", 
          city: "Fukuoka",
          image: "https://images.unsplash.com/photo-1577686557451-eb6bdfc14eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Japão",
          countryInicials: "JP", 
          continent: "Ásia" 
        },
        { 
          id: "94", 
          city: "Abu Dhabi",
          image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
          country: "Emirados Árabes",
          countryInicials: "AE", 
          continent: "Ásia" 
        },
        { 
          id: "95", 
          city: "Jeju",
          image: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
          country: "Coréia do Sul",
          countryInicials: "KR", 
          continent: "Ásia" 
        },
        { 
          id: "96", 
          city: "Porto",
          image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
          country: "Portugal",
          countryInicials: "PT", 
          continent: "Europa" 
        },
        { 
          id: "97", 
          city: "Rodes",
          image: "https://images.unsplash.com/photo-1588797477145-ff47875d89aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80", 
          country: "Grécia",
          countryInicials: "GR", 
          continent: "Europa" 
        },
        { 
          id: "98", 
          city: "Rio de Janeiro",
          image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
          country: "Brasil",
          countryInicials: "BR", 
          continent: "América do Sul" 
        },
        { 
          id: "99", 
          city: "Krabi",
          image: "https://images.unsplash.com/photo-1589211059547-2dc456fd0be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
          country: "Tailândia",
          countryInicials: "TH", 
          continent: "Ásia" 
        },
        { 
          id: "100", 
          city: "Bangalore",
          image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
          country: "Índia",
          countryInicials: "IN", 
          continent: "Ásia" 
        },
      ])

      this.get("/types", () => {
        return {
          night_life: [
            {
              id: 1,
              city: "Ibiza",
              image: "https://images.unsplash.com/photo-1582368312260-04dd28d21248?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
              country: "Espanha",
              countryInicials: "ES",
              continent: "Europa"
            },
            {
              id: 2,
              city: "Berlim",
              image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Alemanha",
              countryInicials: "DE",
              continent: "Europa"
            },
            {
              id: 3,
              city: "Nova York",
              image: "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
              country: "Estados Unidos", 
              countryInicials: "US",
              continent: "América do Norte"
            },
            {
              id: 4,
              city: "São Paulo",
              image: "https://images.unsplash.com/photo-1598900863555-3b098bec6394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
              country: "Brasil",
              countryInicials: "BR",
              continent: "América do Sul"
            },
            {
              id: 5,
              city: "Londres",
              image: "https://images.unsplash.com/photo-1598875791852-8bb153e713f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80", 
              country: "Inglaterra",
              countryInicials: "GB", 
              continent: "Europa"
            },
            {
              id: 6,
              city: "Barcelona",
              image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
              country: "Espanha",
              countryInicials: "ES", 
              continent: "Europa"
            },
            {
              id: 7,
              city: "Montreal",
              image: "https://images.unsplash.com/photo-1559407011-0df8dd5991d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Canadá",
              countryInicials: "CA",
              continent: "América do Norte"
            },
            {
              id: 8,
              city: "Las Vegas",
              image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Estados Unidos",
              countryInicials: "US", 
              continent: "América do Norte"
            },
            {
              id: 9,
              city: "Buenos Aires",
              image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Argentina",
              countryInicials: "AR",
              continent: "América do Sul"
            },
            {
              id: 10,
              city: "Bangkok",
              image: "https://images.unsplash.com/photo-1593948223686-9f8ea5c55102?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Tailândia",
              countryInicials: "TH", 
              continent: "Ásia"
            },
          ],
          adventure: [
            {
              id: 1,
              city: "Forsand",
              image: "https://images.unsplash.com/photo-1561239216-8d8b6afca9d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
              country: "Noruega",
              countryInicials: "NG",
              continent: "Europa"
            },
            {
              id: 2,
              city: "Pokhara",
              image: "https://images.unsplash.com/photo-1627201436373-384e00505886?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Nepal",
              countryInicials: "NP",
              continent: "Ásia"
            },
            {
              id: 3,
              city: "Rissani",
              image: "https://images.unsplash.com/photo-1613223716452-37f720b2556e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Marrocos",
              countryInicials: "MA",
              continent: "África"
            },
            {
              id: 4,
              city: "Bonito",
              image: "https://images.unsplash.com/photo-1469797384183-f961931553e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Brasil",
              countryInicials: "BR",
              continent: "América do Sul"
            },
            {
              id: 5,
              city: "Capadócia",
              image: "https://images.unsplash.com/photo-1648670329793-e542dbe65bb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
              country: "Turquia",
              countryInicials: "TR",
              continent: "Europa"
            },
            {
              id: 6,
              city: "Banff",
              image: "https://images.unsplash.com/photo-1561134643-668f9057cce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
              country: "Canadá",
              countryInicials: "CA",
              continent: "América do Norte"
            },
            {
              id: 7,
              city: "Kanab",
              image: "https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Estados Unidos",
              countryInicials: "US",
              continent: "América do Norte"
            },
            {
              id: 8,
              city: "Jasper",
              image: "https://images.unsplash.com/photo-1549228167-511375f69159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1276&q=80",
              country: "Canadá",
              countryInicials: "CA",
              continent: "América do Norte"
            },
            {
              id: 9,
              city: "San Pedro de Atacama",
              image: "https://images.unsplash.com/photo-1540574223031-9322520d58e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
              country: "Chile",
              countryInicials: "CL",
              continent: "América do Sul"
            },
            {
              id: 10,
              city: "Limpopo",
              image: "https://images.unsplash.com/photo-1577971132997-c10be9372519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
              country: "África do Sul",
              countryInicials: "ZA",
              continent: "África"
            },
          ],
          classic: [
            {
              id: 1,
              city: "Barcelona",
              image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
              country: "Espanha",
              countryInicials: "ES", 
              continent: "Europa" 
            },
            {
              id: 2,
              city: "Istambul",
              image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1134&q=80", 
              country: "Turquia",
              countryInicials: "TR", 
              continent: "Europa"
            },
            {
              id: 3,
              city: "Roma",
              image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Itália",
              countryInicials: "IT", 
              continent: "Europa"
            },
            {
              id: 4,
              city: "Atenas",
              image: "https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Grécia",
              countryInicials: "GR", 
              continent: "Europa"
            },
            {
              id: 5,
              city: "Paris",
              image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
              country: "França",
              countryInicials: "FR", 
              continent: "Europa"
            },
            {
              id: 6,
              city: "Berlim",
              image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Alemanha",
              countryInicials: "DE",
              continent: "Europa"
            },
            {
              id: 7,
              city: "Nova York",
              image: "https://images.unsplash.com/photo-1570560259107-4391b020e73d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
              country: "Estados Unidos",
              countryInicials: "US",
              continent: "América do Norte"
            },
            {
              id: 8,
              city: "Petra",
              image: "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
              country: "Jordânia",
              countryInicials: "JO",
              continent: "Ásia"
            },
            {
              id: 9,
              city: "Wiltshire",
              image: "https://images.unsplash.com/photo-1573051932973-60ffc62f4078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Inglaterra",
              countryInicials: "GB",
              continent: "Europa"
            },
            {
              id: 10,
              city: "Machu Picchu",
              image: "https://images.unsplash.com/photo-1571492913849-fdc97148242d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
              country: "Peru",
              countryInicials: "PE",
              continent: "América do Sul"
            },
          ],
          romantic: [
            {
              id: 1,
              city: "Veneza",
              image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Itália",
              countryInicials: "IT", 
              continent: "Europa" 
            },
            {
              id: 2,
              city: "Paris",
              image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
              country: "França",
              countryInicials: "FR", 
              continent: "Europa"
            },
            {
              id: 3,
              city: "Capadócia",
              image: "https://images.unsplash.com/photo-1648670329793-e542dbe65bb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
              country: "Turquia",
              countryInicials: "TR",
              continent: "Europa"
            },
            {
              id: 4,
              city: "Fernando de Noronha",
              image: "https://images.unsplash.com/photo-1614722860207-909e0e8dfd99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
              country: "Brasil",
              countryInicials: "BR", 
              continent: "América do Sul"
            },
            {
              id: 5,
              city: "Malé",
              image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80", 
              country: "Maldivas",
              countryInicials: "MV", 
              continent: "Ásia"
            },
            {
              id: 6,
              city: "Porto Luís",
              image: "https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Ilhas Maurício",
              countryInicials: "MU",
              continent: "África"
            },
            {
              id: 7,
              city: "Bora Bora",
              image: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
              country: "França",
              countryInicials: "FR",
              continent: "Europa"
            },
            {
              id: 8,
              city: "Punta Cana",
              image: "https://images.unsplash.com/photo-1569700946659-fe1941c71fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "República Dominicana",
              countryInicials: "DO",
              continent: "América do Norte"
            },
            {
              id: 9,
              city: "Santorini",
              image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Grécia",
              countryInicials: "GR",
              continent: "Europa"
            },
            {
              id: 10,
              city: "Viena",
              image: "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80", 
              country: "Áustria",
              countryInicials: "AT", 
              continent: "Europa"
            },
          ],
          gastronomy: [
            {
              id: 1,
              city: "Osaka",
              image: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80", 
              country: "Japão",
              countryInicials: "JP", 
              continent: "Ásia" 
            },
            {
              id: 2,
              city: "Barcelona",
              image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
              country: "Espanha",
              countryInicials: "ES", 
              continent: "Europa"
            },
            {
              id: 3,
              city: "Singapura",
              image: "https://images.unsplash.com/photo-1574227492706-f65b24c3688a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
              country: "Singapura", 
              countryInicials: "SG",
              continent: "Ásia"
            },
            {
              id: 4,
              city: "Paris",
              image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
              country: "França",
              countryInicials: "FR", 
              continent: "Europa"
            },
            {
              id: 5,
              city: "Londres",
              image: "https://images.unsplash.com/photo-1598875791852-8bb153e713f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80", 
              country: "Inglaterra",
              countryInicials: "GB", 
              continent: "Europa"
            },
            {
              id: 6,
              city: "Roma",
              image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Itália",
              countryInicials: "IT", 
              continent: "Europa"
            },
            {
              id: 7,
              city: "Bangkok",
              image: "https://images.unsplash.com/photo-1593948223686-9f8ea5c55102?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "Tailândia",
              countryInicials: "TH", 
              continent: "Ásia"
            },
            {
              id: 8,
              city: "São Paulo",
              image: "https://images.unsplash.com/photo-1598900863555-3b098bec6394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
              country: "Brasil",
              countryInicials: "BR",
              continent: "América do Sul"
            },
            {
              id: 9,
              city: "Dubai",
              image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Emirados Árabes", 
              countryInicials: "AE",
              continent: "Ásia"
            },
            {
              id: 10,
              city: "Lisboa",
              image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80", 
              country: "Portugal",
              countryInicials: "PT", 
              continent: "Europa"
            },
          ],
          modern: [
            {
              id: 1,
              city: "Tóquio",
              image: "https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80", 
              country: "Japão",
              countryInicials: "JP", 
              continent: "Ásia"
            },
            {
              id: 2,
              city: "Berlim",
              image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Alemanha",
              countryInicials: "DE", 
              continent: "Europa"
            },
            {
              id: 3,
              city: "Dubai",
              image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Emirados Árabes", 
              countryInicials: "AE",
              continent: "Ásia"
            },
            {
              id: 4,
              city: "Xangai",
              image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "China",
              countryInicials: "CN", 
              continent: "Ásia"
            },
            {
              id: 5,
              city: "Estocolmo",
              image: "https://images.unsplash.com/photo-1588653818221-2651ec1a6423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
              country: "Suécia",
              countryInicials: "SE", 
              continent: "Europa"
            },
            {
              id: 6,
              city: "Nova York",
              image: "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
              country: "Estados Unidos",
              countryInicials: "US", 
              continent: "América do Norte"
            },
            {
              id: 7,
              city: "Hong Kong",
              image: "https://images.unsplash.com/photo-1594973782943-3314fe063f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
              country: "China", 
              countryInicials: "CN", 
              continent: "Ásia"
            },
            {
              id: 8,
              city: "Londres",
              image: "https://images.unsplash.com/photo-1598875791852-8bb153e713f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80", 
              country: "Inglaterra",
              countryInicials: "GB", 
              continent: "Europa"
            },
            {
              id: 9,
              city: "Helsinki",
              image: "https://images.unsplash.com/photo-1540799051881-f52f8d808bf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
              country: "Finlândia", 
              countryInicials: "FI",
              continent: "Europa" 
            },
            {
              id: 10,
              city: "São Francisco",
              image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
              country: "Estados Unidos",
              countryInicials: "US", 
              continent: "América do Norte"
            },
          ],
          cold: [
            {
              id: 1,
              city: "Tallinn",
              image: "https://images.unsplash.com/photo-1452868195396-89c1af3b1b2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80", 
              country: "Estônia",
              countryInicials: "EE", 
              continent: "Europa"
            },
            {
              id: 2,
              city: "Innsbruck",
              image: "https://images.unsplash.com/photo-1553537316-86354ef82879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80", 
              country: "Áustria",
              countryInicials: "AT", 
              continent: "Europa"
            },
            {
              id: 3,
              city: "Toronto",
              image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Canadá",
              countryInicials: "CA", 
              continent: "América do Norte"
            },
            {
              id: 4,
              city: "Turim",
              image: "https://images.unsplash.com/photo-1626635049439-2f7ddb8db15e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80", 
              country: "Itália",
              countryInicials: "IT", 
              continent: "Europa"
            },
            {
              id: 5,
              city: "Praga",
              image: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "República Tcheca",
              countryInicials: "CZ", 
              continent: "Europa"
            },
            {
              id: 6,
              city: "Chamonix",
              image: "https://images.unsplash.com/photo-1550134400-43b46f9b9918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
              country: "França",
              countryInicials: "FR", 
              continent: "Europa"
            },
            {
              id: 7,
              city: "Bariloche",
              image: "https://images.unsplash.com/photo-1598162480222-b2c3d92548d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Argentina", 
              countryInicials: "AR", 
              continent: "América do Sul"
            },
            {
              id: 8,
              city: "Zurique",
              image: "https://images.unsplash.com/photo-1620562423895-ad4924643d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
              country: "Suíça",
              countryInicials: "CH", 
              continent: "Europa"
            },
            {
              id: 9,
              city: "Tromsø",
              image: "https://images.unsplash.com/photo-1560185678-759b5712a60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
              country: "Noruega", 
              countryInicials: "NO",
              continent: "Europa" 
            },
            {
              id: 10,
              city: "Salzburgo",
              image: "https://images.unsplash.com/photo-1584088366082-67dd670d7ce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Áustria",
              countryInicials: "AT", 
              continent: "Europa"
            },
          ],
          beach: [
            {
              id: 1,
              city: "Fernando de Noronha",
              image: "https://images.unsplash.com/photo-1614722860207-909e0e8dfd99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
              country: "Brasil",
              countryInicials: "BR", 
              continent: "América do Sul"
            },
            {
              id: 2,
              city: "Palm Beach",
              image: "https://images.unsplash.com/photo-1633421332483-1aa89f0c6b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
              country: "Aruba",
              countryInicials: "AW", 
              continent: "América do Sul"
            },
            {
              id: 3,
              city: "Tulum",
              image: "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
              country: "México",
              countryInicials: "MX", 
              continent: "América do Norte"
            },
            {
              id: 4,
              city: "Cabo São Lucas",
              image: "https://images.unsplash.com/photo-1566931603656-96071f3f69a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
              country: "México",
              countryInicials: "MX", 
              continent: "América do Norte"
            },
            {
              id: 5,
              city: "Carmel-by-the-sea",
              image: "https://images.unsplash.com/photo-1477363547594-c9530672c82d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
              country: "Estados Unidos",
              countryInicials: "US", 
              continent: "América do Norte"
            },
            {
              id: 6,
              city: "Willemstad",
              image: "https://images.unsplash.com/photo-1638969533275-ce894f0c9db2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
              country: "Curaçao",
              countryInicials: "CC", 
              continent: "América do Sul"
            },
            {
              id: 7,
              city: "Cancun",
              image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80", 
              country: "México",
              countryInicials: "MX", 
              continent: "América do Norte"
            },
            {
              id: 8,
              city: "Lagos",
              image: "https://images.unsplash.com/photo-1526737511523-ba685f246e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80", 
              country: "Portugal",
              countryInicials: "PT", 
              continent: "Europa"
            },
            {
              id: 9,
              city: "Punta Cana",
              image: "https://images.unsplash.com/photo-1569700946659-fe1941c71fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              country: "República Dominicana",
              countryInicials: "DO",
              continent: "América do Norte" 
            },
            {
              id: 10,
              city: "Míconos",
              image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
              country: "Grécia",
              countryInicials: "GR", 
              continent: "Europa"
            },
          ]
        }
      })

      this.passthrough();
    }
  })
  
  return server;
}