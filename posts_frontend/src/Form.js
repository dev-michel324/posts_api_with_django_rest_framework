import { useState } from 'react';

const Form = () => {

    const cadastro = (e) => {
        e.preventDefault();
        console.log("cadastrou!");
        console.log(`Cadastrou com name ${name} e password ${password}`);
    }

    const change = () => {
        setName("Carlos");
        setPassword("321321321");
    }

    const [name, setName] = useState('Marcos');
    const [password, setPassword] = useState('123123123');

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastro}>
                <div>
                    <input type="text" onChange={(e) => setName(e.target.value)} id="name" value={name} name="name" placeholder="nome"/>
                </div>
                <div>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" value={password} name="password" placeholder="Senha"/>
                </div>
                <div>
                    <input type="submit" className="btn" value="Enviar"/>
                </div>
            </form>
            <button onClick={change}>Mudar</button>
        </div>
    )
}

export default Form;