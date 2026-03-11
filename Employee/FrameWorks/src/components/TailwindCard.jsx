function TailwindCard() {
    return (
        <div className="bg-black text-white p-6 rounded shadow-lg custom-card">
            <h3 className="text-xl font-bold text-emerald-400 mb-2">
                Student Profile (Tailwind)
            </h3>
            <p className="text-sm mb-4">
                Name: Prachi Parmar <br />
                Course: React Fundamentals
            </p>
            <button className="bg-emerald-500 text-black hover:bg-emerald-600 px-2 py-2 rounded">
                View Profile
            </button>
        </div>
    )
}

export default TailwindCard