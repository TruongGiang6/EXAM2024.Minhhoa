function Header({onModal})
{
    return(
        <>
         <header className="container d-flex space-between mg-2">
        <p className="text-title">Task list</p>
        <button className="btn bg-primary color-light" onClick={onModal}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                width="24px" fill="#1f1f1f">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>Add Task</button>
    </header>
        </>
    )
}
export default Header