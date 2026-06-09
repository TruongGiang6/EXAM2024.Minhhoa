function Header({onModal})
{
    return(
        <>
         <header className="container d-flex space-between align-center mg-2">
            <p className="text-title">Task List</p> {/* Đổi thành Task List */}
            <button className="btn bg-primary color-light d-flex align-center gap-10" onClick={onModal}>
                {/* Icon dấu cộng Outlined */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add Task
            </button>
        </header>
        </>
    )
}
export default Header;