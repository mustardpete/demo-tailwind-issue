import './styles.css'

export default async function HomePage() {
  return (
    <div className="home">
      <div className="text-center text-xl font-bold text-blue-500 mt-10">
        This works ok
        <span className="text-red-500"> see this is red</span>
      </div>
    </div>
  )
}
