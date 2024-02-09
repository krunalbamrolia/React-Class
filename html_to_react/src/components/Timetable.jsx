
const TimetableData = () => {

    return (
        <main>
            <div className="timetable" id="timetable">
                <div>
                    <h2>Today's Timetable</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Room No.</th>
                            <th>Subject</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>09-10 AM</td>
                            <td>27</td>
                            <td>Engineering Drawing</td>
                            <td>Tutorial</td>
                        </tr>
                        <tr>
                            <td>11-12 AM</td>
                            <td>28</td>
                            <td>Mathematics</td>
                            <td>Lecture</td>
                        </tr>
                        <tr>
                            <td>12-01 PM</td>
                            <td>26</td>
                            <td>Chemistry</td>
                            <td>Lecture</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default TimetableData;
