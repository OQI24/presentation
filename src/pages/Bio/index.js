import React, {useState} from 'react';
import './style.scss';

export const Bio = () => {
    const [translate, setTranslate] = useState(true);

    return (
        <div className={'bg-about-me'}>
        <div className="wrap-bio">
            <div className="jumbotron content">
                <h1 className="display-4">Немного о себе</h1>
                {translate
                    ? <p className="lead proverb" title={'Русская пословица'}>Good Ivan - both to people and to us, thin Ivan - neither to people, nor to us &copy;</p>
                    : <p className="lead proverb" title={'Русская пословица'}>Добрый Иван - и людям, и нам, худой Иван - ни людям, ни нам &copy;</p>
                }
                <span className="my-sm-3 translate"
                    onClick={() => setTranslate(!translate)}
                    href=""
                >
                    click to translate
                </span>
                <hr className="my-4"/>
                <div className={'text-content'}>
                <p>
                    Молодой человек, без вредных привычек, с позитивным взглядом в будущее,
                    адекватно воспринимаю критику, люблю работать в команде единомышленников и по возможности искренних людей.
                    Уважаю в людях верность своим принципам и целеустремленность.
                    Не очень нравится читать, но с этим работаю, увлекаюсь баскетболом и в целом спортом, неплохо разбираюсь в машинах.
                </p>
                <p>Начинал свой путь в IT c технаря, постепенно уходя в системное администрирование. Занимаюсь программированием с 2018 года,
                    поначалу просто для себя, позже решил сменить вектор развития и это стало моей профессиональной деятельностью.
                    В коммерческой разработке с начала 2019 года. Стартовал со стажера-разработчика, позже перешел на позицию Frontend веб-разработчика
                    на которой нахожусь по настоящее время.
                    Занимаюсь разработкой SPA приложения - внутреннего проекта компании, для работы использую React\ Redux\ Appolo\ NodeJS\ MaterialUI.
                    Немного умею в C#, в рамках университетской программы.

                    Живу и развиваюсь в Москве, стараюсь делать мир лучше в ключе взаимодействия с нашей системой, командой и не только.</p>
                </div>
            </div>
        </div>
        </div>
    );
};