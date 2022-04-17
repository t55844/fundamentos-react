import React from "react"

export default function RepeticaoTabela(props){
    
    
    const tr = props.produtos.map(produto=>{
            const tr =
            <tbody key={produto.id}>
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
                
            </tbody>
            
            return tr
    });
    return(
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Produto</th>
                    <th>Preco</th>
                </tr>
            </thead>
            {tr}
        </table>
    )
}