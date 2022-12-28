import Layout from "../components/layout";
import Head from "next/head";
import { useState } from "react";

export default function help(_props) {
    const [user, setUser] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        const name = e.target.elements[0].value;
        fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({name}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        e.target[0].value = '';
        setUser(name);
    }
    return (
        <Layout>
            <Head>
                <title>Big Help</title>
            </Head>
            <div style={{textAlign: 'center'}}>
                <form onSubmit={handleSubmit} method="POST">
                    <input id="name" type='text' name="name"/>
                    <input type='submit' value='Confirm'/>
                </form>
                <div>
                    {user ? user: 'Elena'}
                </div>
            </div>
        </Layout>
    )
}