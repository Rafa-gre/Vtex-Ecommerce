import styled from 'styled-components';

export const Container = styled.form`
    width: 100%;
    height:auto;
    display:flex;
    flex-direction: column;
    

   
    
    form{
        width: 100vw;
        display:flex;
        flex-direction: column;
        justify-content:center;
        
        align-items: center;
    }
    form div{
        margin: 5px;
        width: 120vh;
        align-items: center;
        display: flex;
    }

    form div label{
        width: 20vw;
        
    }

    form div input{
        width: 80vw;
        margin:5px;
    }

    .btn{
        margin-top: 20px;
        width:70vh;
        align-self: center;
    }
    .head{
        display:flex;
        
    }
    .head img{
        align-self:flex-start
    }

    form h1{
        align-self: center;
        margin-bottom: 30px;
    }
    
`