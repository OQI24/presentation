import React from "react";


class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError(error) {
        console.log(error);
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return {hasError: true};
    }

    // componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    // logErrorToMyService(error, errorInfo);
    // }

    render() {
        if (this.state.hasError) {
            // Можно отрисовать запасной UI произвольного вида
            return <h3>Что-то пошло не так.</h3>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
