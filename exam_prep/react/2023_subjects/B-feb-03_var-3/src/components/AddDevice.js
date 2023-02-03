import { useState } from 'react';

const AddDevice = (props) => {
	const { onAdd } = props
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)

	const handleAdd = () => {
		let device = {
			name: name,
			price: price
		}
		onAdd(device);
	}

	return (
		<div>
			Add a device
			<input name='name' placeholder='name' onChange={(e) => setName(e.target.value)}></input>
			<input name='price' placeholder='price' onChange={(e) => setPrice(e.target.value)}></input>
			<button value='add' onClick={handleAdd}>add</button>
		</div>
	)
}

export default AddDevice