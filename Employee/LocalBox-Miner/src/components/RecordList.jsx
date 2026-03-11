import RecordRow from "./RecordRow";

function RecordList({ records, deleteRecord, startEdit }) {

    return (
        <>
            <div>
                {records.length === 0 ? (
                    <h3>No Records Found</h3>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {records.map((record) => (
                                <RecordRow
                                    key={record.id}
                                    record={record}
                                    deleteRecord={deleteRecord}
                                    startEdit={startEdit}
                                />
                            ))}

                        </tbody>

                    </table>
                )}
            </div>
        </>

    );
}
export default RecordList;