import { Grid } from '@material-ui/core';
import { useState } from 'react';
import EditLogModal from 'src/components/EditLogModal/EditLogModal';

export const EditLogPage = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			{showModal && (
				<EditLogModal open={true} handleClose={() => setShowModal(false)} />
			)}
		</>
	);
};

export default EditLogPage;
