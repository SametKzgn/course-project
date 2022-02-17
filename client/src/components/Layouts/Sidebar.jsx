const Sidebar = () => {
    const sidebarLinks = [
        {name: 'Home',href:"/"},
        {name: 'Courses',href:"/courses"},
        {name: 'Classes',href:"/classes"},
        {name: 'Students',href:"/students"},
      ]
    return (
        <div className="sidebar">
      <div className="sidebar-inner flex flex-col g-10">
        <h1>Course Week</h1>
        <div className="sidebar-links flex flex-col g-5">
          {sidebarLinks && sidebarLinks.map((item,key) => (
            <a key={key} href={item.href}>{item.name}</a>
          ))}
        </div>
      </div>
    </div>
    )
}

export default Sidebar