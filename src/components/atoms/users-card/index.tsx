import './user-card.scss'

interface UserCardProps {
    icon: string;
    text: string;
    number: string
    variant?: string
}
const UsersCard = ({ icon, text, number, variant = 'purple' }: UserCardProps) => {
    return (
        <div className="card">
            <div className={`icon icon--${variant}`}>
                <img src={icon} alt="" />
            </div>
            <div className="text">{text}</div>
            <div className="text text--number">{number}</div>

        </div>
    )
}

export default UsersCard
