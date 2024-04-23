
const SkillSet = ({skills}: {skills: string[]}) => {
    return (
        <div className="border border-gray-700 shadow-md shadow-gray-700 rounded-lg p-4 my-6 transition duration-300 ease-in-out hover:shadow-xl hover:border-gray-600">
            <h2 className="text-2xl font-bold bg-gray-900 text-white py-2 px-4 w-full hover:bg-gray-800">Skills</h2>
            <ul className="flex flex-wrap gap-2 mt-2 m-6 mt-6">
                {skills.map(skill => (
                    <li key={skill} className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-1 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillSet;

