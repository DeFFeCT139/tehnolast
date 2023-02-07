import { Swiper, SwiperSlide } from 'swiper/react';
import {Mousewheel, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import { useState } from 'react';
import { useEffect } from 'react';

function MainTeam() {
    let raezmer = 3
    const [raz, setRaz] = useState(raezmer)
    useEffect(()=>{
        if (window.innerWidth >= 500) {
            setRaz(raezmer = document.getElementById('swoper').offsetWidth/ 340)
        } else {
            setRaz(raezmer = 1)
        }
    })
    return (
      <div id='team' className="main-team main-block-padding">
        <div className="conteiner">
            <div className="main-inner">
                <div className="main-team-content">
                    <div className="main-team-content-title">Команда</div>
                    <Swiper
                    id='swoper'
                    modules={[Mousewheel, Navigation, Pagination, Scrollbar, A11y]}
                    mousewheel
                    navigation={{ clickable: true }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    spaceBetween={5}
                    slidesPerView={raz}
                    >
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture one">
                                    
                                </div>
                                <p className="name-client"> Глеб Чепрасов
                                    <span>Генеральный директор
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture two">
                                    
                                </div>
                                <p className="name-client"> Анастасия Чепрасова
                                    <span>Директор по Документации и Информационной безопасности
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture free">
                                    
                                </div>
                                <p className="name-client"> Евгений Устинов
                                    <span>Директор отдела разработки WEB решений 
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture for">
                                
                                </div>
                                <p className="name-client"> Николай Кондратенко
                                    <span>Технический Директор
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture five">
                                
                                </div>
                                <p className="name-client">Андрей Волков
                                    <span>Директор отдела разработки Технических и Образовательных решений
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture ger">
                                
                                </div>
                                <p className="name-client">Дмитрий Герасимов
                                    <span>Аналитик
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture mar">
                                
                                </div>
                                <p className="name-client">Полина Марецкая
                                    <span>Дизайнер UX/UI, SMM менеджер
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture lvov">
                                
                                </div>
                                <p className="name-client">Никита Львов
                                    <span>Web Front-End разработчик
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture five arh">
                                
                                </div>
                                <p className="name-client">Егор Архаров
                                    <span>Project manage
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture kud">
                                
                                </div>
                                <p className="name-client">Павел Кудрявцев
                                    <span>Зам. Директор отдела разработки технических и образовательных решений
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-client">
                                <div className="user-picture av">
                                
                                </div>
                                <p className="name-client">Добрыня Авдюшин
                                    <span>Зам. Директор отдела разработки технических и образовательных решений
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainTeam;