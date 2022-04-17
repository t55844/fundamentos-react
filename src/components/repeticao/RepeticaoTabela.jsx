import React from "react"

export default function RepeticaoTabela(props){
    
    
    const tr = props.produtos.map(produto=>{
            const tr =<tbody key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tbody>
            
            return tr
    });
    return(
        <table>
            <thead>
                <th>id</th>
                <th>Produto</th>
                <th>Preco</th>
            </thead>
            {tr}
        </table>
    )
}