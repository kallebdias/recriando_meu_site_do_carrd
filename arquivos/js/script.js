const chk = document.getElementById('chk')

function toggleDarkMode()
{
    document.body.classList.toggle('dark')
}

function loadTheme()
{
    const darkMode = localStorage.getItem('dark')

    if(darkMode)
    {
        toggleDarkMode()
        chk.checked = true
    }
}

loadTheme()

chk.addEventListener('change', () =>
{
    toggleDarkMode()

    localStorage.removeItem('dark')

    if(document.body.classList.contains('dark'))
    {
        localStorage.setItem('dark', 1)
    }
})