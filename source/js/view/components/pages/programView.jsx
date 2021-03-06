import React from "react";
import TransitionView from "~/view/components/common/transitionView.jsx";

class ProgramView extends TransitionView {
	getInner() {
		return (
			<div className="three threeDown">
				<h1>Что еще будет в программе</h1>
				<ul>
					<li>Авторские медитации</li>
					<li>Техники, как заглянуть в свое наилучшее будущее</li>
					<li>Проработка старых обид</li>
					<li>Снятие блоков и стеснения перед знакомствами</li>
					<li>Понимание, чего Вы хотите на самом деле</li>
					<li>
						Практика: как вычислить за первые минуты свидания, кто перед Вами<br />
						чтобы не тратить месяцы и годы на это
					</li>
					<li>И ответы на самые интересные вопросы в прямом эфире</li>
					<li>И еще много-много интересного!</li>
				</ul>
			</div>
		);
	}
}

export default ProgramView;
