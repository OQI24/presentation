import React from 'react';
import './style.scss';

export const Home = () => (
    <div className="home-page">
        <div className="jumbotron main">
            <h1 className="display-4">Добро пожаловать!</h1>
            <p className="lead border-bottom pb-3">Меня зовут Иван и я являюсь веб-разработчиком.</p>
            <div className={'home-content'}>
                <p>
                    <span>На этом ресурсе вы сможете узнать немного больше обо мне как о человеке и
                разработчике.</span>
                    <br/>
                    <span>Так как на данный момент весь мой опыт комерческой разработки был в рамках внутреннего проекта компании и защищен комерческой тайной,
                        я не имею возможности продемонстрировать примеры своих работ.</span>
                    <br/>
                    <span>Данный ресур служит для ознакомления с некотрыми моими навыками.</span>
                    <br/>
                    <span>За основу разработки взял Single Page Application с применением React, ReactRouter, Redux и адаптивной верстки.</span>
                    <br/>
                    <span>Исходный код данного проекта можно увидеть, перейдя по </span>
                    <span className="link-project border-bottom" onClick={() => window.open('https://github.com/OQI24')}>
                    сслыке
                    </span>
                </p>
            </div>
        </div>
    </div>
);