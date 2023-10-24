import React, {useEffect, useRef} from 'react'
import './scss/style.scss';

const Modal = (props) => {
	
	const ref = useRef();
	
	// реализация закрытия модального окна вне окна
	useEffect(() => {
		const modal = document.querySelector( '.modal');
		const content = document.querySelector( '.modal__content');
		
		document.addEventListener( 'click', (e) => {
			const outsideModal = e.composedPath().includes(modal);
			const insideModal = e.composedPath().includes(content);
			
			if ( !insideModal && outsideModal) {
				props.handleClose(); // скрываем модальное окно, если нажатие за пределами
			}
		})
	}, [ref])
	
	return (
		<div className="modal" ref={ref}>
			
			<div className="modal__content">
				
				<div className="modal__title">
					{props.item.name}
				</div>
				
				<svg onClick={props.handleClose} className="modal__close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z" fill="black"/>
				</svg>
				
				<div className="modal__info">
					<div className="modal__info-title">
						Телефон:
					</div>
					<div className="modal__info-item">
						{props.item.phone}
					</div>
					<div className="modal__info-title">
						Почта:
					</div>
					<div className="modal__info-item">
						{props.item.email}
					</div>
					<div className="modal__info-title">
						Адрес:
					</div>
					<div className="modal__info-item">
						{props.item.address}
					</div>
					<div className="modal__info-title">
						Дата приема:
					</div>
					<div className="modal__info-item">
						{props.item.hire_date}
					</div>
					<div className="modal__info-title">
						Должность:
					</div>
					<div className="modal__info-item">
						{props.item.position_name}
					</div>
					<div className="modal__info-title">
						Подразделение:
					</div>
					<div className="modal__info-item">
						{props.item.department}
					</div>
				</div>
				
			</div>
			
		</div>
	)
}

export default Modal