import React,{ useEffect} from 'react'
import axios from 'axios'


function LandingPage(props) {
    useEffect(() => {
        console.log(2)
        axios.get('/api/hello')
        .then(response => {console.log(response.data)})
    }, [])

    const onClickHandler = () => {
        console.log(1)
        axios.get('/api/users/logout')
        .then(response =>{
            console.log(response.data)
            if(response.data.success){
                props.history.push('/login')
            }
            else{
                alert("로그아웃하는데 실패하였습니다.")
            }
         })
    }

    return (
        <div style={{
            display: 'flex' , justifyContent: 'center', alignItems: 'center',
            width : '100%', height: '100vh'
        }}>
            <h2>시작페이지</h2>
            <button type ="submit" onClick = {onClickHandler}>
                Logout
            </button>
        </div>
    )
}

export default LandingPage
