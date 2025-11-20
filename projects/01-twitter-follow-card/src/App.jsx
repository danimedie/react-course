import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            initialIsFollowing: false
        },
        {
            userName: 'danimedie',
            name: 'Daniel Medié',
            initialIsFollowing: true
        },
        {
            userName: 'ibai',
            name: 'Ibai Llanos',
            initialIsFollowing: false
        }
    ]

    return (
        <section className='App'>
            {
                users.map(({userName, name, initialIsFollowing}) => {
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName} 
                            initialIsFollowing={initialIsFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>   
    )
}