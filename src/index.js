import ReactDom from "react-dom/client"
import Card from "./cards.js";
import "./cardContainer.css"

const root =ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
        <div className="cardContainer">
            <Card 
                url="https://static.toiimg.com/thumb/imgsize-23456,msid-108812398,width-600,resizemode-4/108812398.jpg"
                movieName="Kartam Bhugtam" 
                ticketCost="750/- per person" 
                rating="9" 
                duration="2.5hr"/>   
                
            <Card 
                url="https://c.saavncdn.com/912/Khamakha-From-Kaun-Pravin-Tambe--Hindi-2022-20220324155629-500x500.jpg" 
                movieName="Kaun Pravin Tambe" 
                ticketCost="550/- per person" 
                rating="8" 
                duration="1.5hr"/>
            <Card 
                url="https://c.saavncdn.com/011/Baji-Marathi-2015-20190528073833-500x500.jpg"
                movieName="Luv U Shankar" 
                ticketCost="250/- per person" 
                rating="9.5" 
                duration="2hr"/>                     
        </div>
    </>
)