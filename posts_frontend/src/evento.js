import Button from "./evento/Button";

const Evento = ({numero}) => {
    const myEvent = () => {
        console.log("Clicked on button!");
    }

    return (
        <>
            <Button event={myEvent} text="Teste"/>
            <button className="btn" onClick={myEvent}>Botao</button>
        </>
    )
}

export default Evento;