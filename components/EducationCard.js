const EducationCard = ({ institution, degree, fieldOfStudy, timePeriod }) => {
    return (
        <div className="border border-gray-700 shadow-md shadow-gray-700 rounded-lg p-4 mb-6 transition duration-300 ease-in-out hover:shadow-xl hover:border-gray-600">
            <div className="bg-gray-900 text-white py-2 px-4 w-full hover:bg-gray-800">
                <h3 className="text-xl font-bold">{institution}</h3>
            </div>
            <p className="text-gray-500 mt-2">{degree} in {fieldOfStudy}</p>
            <p className="text-gray-800 dark:text-white mt-2">{timePeriod}</p>
        </div>
    );
}

export default EducationCard;
