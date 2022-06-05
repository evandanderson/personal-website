import Page from '../../components/Page'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

export default function Projects() {
    /*
    <iframe src='/projects/snake' title='snake'>
    </iframe>
    */
    return (
        <Page>
            <div className='project-container'>
                <ProjectItem
                    src="https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?k=20&m=1047259374&s=612x612&w=0&h=pt3XbBvrmiYgoYmVzsaUeXtV8vw_jJI9Ly8P7AL6Qig="
                    title="Vibes for Spotify"
                    description = "Lorem ipsum dolor sit amet"
                    languages={['CSS', 'HTML', 'JavaScript', 'Python']}
                />
                <ProjectItem
                    src="https://answers.unity.com/storage/temp/15108-example1.jpg"
                    title="Raycasting"
                    description="Lorem ipsum dolor sit amet"
                    languages={['Lua']}
                />
                <ProjectItem
                    src="https://www.giantbomb.com/a/uploads/scale_medium/0/4109/189784-cp.jpg"
                    title="3CP"
                    description="Lorem ipsum dolor sit amet"
                    languages={['Lua']}
                />
                <ProjectItem
                    src="https://nytco-assets.nytimes.com/2022/01/Screen-Shot-2022-01-30-at-10.05.09-PM.png"
                    title="Wordle"
                    description="Lorem ipsum dolor sit amet"
                    languages={['CSS', 'HTML', 'JavaScript']}
                />
                <ProjectItem
                    src="https://helloacm.com/wp-content/uploads/2019/12/simple-snake-game-in-javascript.jpg"
                    title="Snake"
                    description="Lorem ipsum dolor sit amet"
                    languages={["CSS", "HTML", "JavaScript"]}
                />
            </div>
        </Page>
    )
}