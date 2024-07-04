import toast from 'react-hot-toast';

export function successAlert(textToShow) {
	toast.success(textToShow, {
		position: 'top-center',
	});
}
export function errorAlert(textToShow) {
	toast.error(textToShow, {
		position: 'top-center',
	});
}

export function defaultAlert(textToShow) {
	toast(textToShow, {
		position: 'top-center',
	});
}
