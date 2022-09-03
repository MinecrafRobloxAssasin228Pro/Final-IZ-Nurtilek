import VHeader from "../../Pages/Vacancy/VacancyHeader/VHeader"

const VacancyLayout = ({ children }) => {
    return (
        <>
            <VHeader />
            {children}
        </>
    )
}

export default VacancyLayout