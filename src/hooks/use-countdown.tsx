import { useCallback, useState, useEffect, useRef } from 'react';

function useCountdown(targetDate: Date) {
	const [count, setCount] = useState(calculateTimeRemaining(targetDate));
	const [isCountdownRunning, setIsCountdownRunning] = useState(false);
	const startCountdown = useCallback(() => {
		setIsCountdownRunning(true);
	}, []);

	const stopCountdown = useCallback(() => {
		setIsCountdownRunning(false);
	}, []);

	const resetCountdown = useCallback(() => {
		stopCountdown();
		setCount(calculateTimeRemaining(targetDate));
	}, [stopCountdown, targetDate]);

	useEffect(() => {
		let intervalId: NodeJS.Timeout | null = null;

		const updateTimeRemaining = () => {
			setCount(calculateTimeRemaining(targetDate));
		};

		if (isCountdownRunning) {
			intervalId = setInterval(updateTimeRemaining, 1000);
		}

		return () => {
			clearInterval(intervalId as NodeJS.Timeout);
		};
	}, [isCountdownRunning, targetDate]);

	return {
		time: count,
		startCountdown,
		stopCountdown,
		resetCountdown
	};
}

function calculateTimeRemaining(targetDate: Date) {
	const timeDiff = targetDate.getTime() - Date.now();
	const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
	return {
		days,
		hours,
		minutes,
		seconds
	};
}

export default useCountdown;
