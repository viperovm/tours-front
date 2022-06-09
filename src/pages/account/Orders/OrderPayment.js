import React, {useState} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import MetaTags from "react-meta-tags";
import MainLayout from "../../../layouts/MainLayout";
import {Link} from "react-router-dom";
import SideBar from "../../../components/sideBar/SideBar";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import ok from './img/ok.svg'
import cancel from './img/cancel.svg'
import flash from './img/flash.svg'
import team from './img/team.svg'
import wallet from './img/wallet.svg'
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";
import RadioInput from "../../../components/AccountTours/FormFields/RadioInput";
import CheckboxInput from "../../../components/AccountTours/FormFields/CheckboxInput";
import Button from "../../../components/AccountTours/Components/Button";

const OrderPayment = ({match}) => {

  const [places, setPlaces] = useState(1)
  const [vacantsNumber, setVacantsNumber] = useState(30)

  const handleAdd = () => {
    if (places < vacantsNumber) {
      setPlaces(places + 1)
    }
  }

  const handleSubtract = () => {
    if (places > 1) {
      setPlaces(places - 1)
    }
  }

  return (
    <>
      <MetaTags>
        <title>Оплата бронирования</title>
        <meta name='description' content=''/>
        <link rel='icon' href='/favicon.ico'/>
      </MetaTags>
      <MainLayout page={'orders'}>
        <section>
          <div className='wrapper'>
            <Breadcrumbs>
              <Breadcrumb
                link="/"
              >
                Главная
              </Breadcrumb>
              <Breadcrumb
                link="/account"
              >
                Личный кабинет
              </Breadcrumb>
              <Breadcrumb
                link="/account/orders"
              >
                Мои брони
              </Breadcrumb>
              <Breadcrumb>
                Оплата бронирования
              </Breadcrumb>
            </Breadcrumbs>
          </div>
        </section>

        <section>
          <div className='wrapper'>
            <div className='global-h2-heading'><h2>Оплата бронирования</h2></div>
            <div className={styles.order_payment_section}>
              <div className={styles.order_payment_section_main}>
                <div className={styles.order_payment_section_main_upper}>
                  <div>
                    <div className={styles.order_payment_section_main_upper_heading}>
                      ДАТА ПУТЕШЕСТВИЯ
                    </div>
                    <div className={styles.order_payment_section_main_upper_dates}>
                      <div>28 июня 2021 (Понедельник)</div>
                      <div> 2 июля 2021 (Пятница)</div>
                    </div>
                    <div className={styles.order_payment_section_main_upper_select_heading}>
                      Выбрать даты
                    </div>
                    <div className={styles.order_payment_section_main_upper_select}>
                      <SelectInput/>
                    </div>
                    <div className={styles.order_payment_section_main_upper_ok}>
                      <img src={ok} alt="ok"/>
                      <div>Гарантированно лучшая цена</div>
                    </div>
                  </div>
                  <div>

                    <div className={styles.order_payment_section_main_upper_list}>
                      <div className={styles.order_payment_section_main_upper_list_item}>
                        <img src={team} alt="team"/>
                        <div className={styles.order_payment_section_main_upper_list_item_text}>
                          <div className={styles.order_payment_section_main_upper_list_item_text_heading}>
                            1/20 мест осталось.
                          </div>
                          <div className={styles.order_payment_section_main_upper_list_item_text_text}>
                            Ваше место будет забронировано в течение 30 минут после оплаты.
                          </div>
                        </div>
                      </div>
                      <div className={styles.order_payment_section_main_upper_list_item}>
                        <img src={wallet} alt="wallet"/>
                        <div className={styles.order_payment_section_main_upper_list_item_text}>
                          <div className={styles.order_payment_section_main_upper_list_item_text_heading}>
                            Только депозит
                          </div>
                          <div className={styles.order_payment_section_main_upper_list_item_text_text}>
                            8 750 за 1 участника, как только бронирование подтверждено
                          </div>
                        </div>
                      </div>
                      <div className={styles.order_payment_section_main_upper_list_item}>
                        <img src={flash} alt="flash"/>
                        <div className={styles.order_payment_section_main_upper_list_item_text}>
                          <div className={styles.order_payment_section_main_upper_list_item_text_heading}>
                            Моментальное бронирование
                          </div>
                          <div className={styles.order_payment_section_main_upper_list_item_text_text}>
                            Ваше участие будет подтверждено после оплаты
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.order_payment_section_main_upper_ok}>
                      <img src={ok} alt="ok"/>
                      <div>Никаких скрытых платежей</div>
                    </div>
                  </div>
                </div>


                <div className={styles.order_payment_section_main_body}>
                  <div>
                    <div className={styles.order_payment_section_main_upper_heading}>
                      ДЕТАЛИ О ПУТЕШЕСТВЕННИКАХ
                    </div>
                    <div className={styles.order_payment_section_main_upper_select_heading}>
                      Количество путешественников
                    </div>

                    <div className={styles.inputs_row_date_input}>
                      <div className={styles.inputs_row_date_input_button_minus} onClick={handleSubtract}>
                        —
                      </div>
                      <div className={styles.inputs_row_date_input_text}>
                        Мест:
                        {' '}
                        {places}
                      </div>
                      <div className={styles.inputs_row_date_input_button} onClick={handleAdd}>
                        +
                      </div>
                    </div>

                    <div className={styles.order_payment_section_main_upper_traveler_form}>
                      <div className={styles.order_payment_section_main_upper_traveler_form_heading}>
                        Основной путешественник
                      </div>
                      <SingleWrapper margin_bottom={'0'} label={'Фамилия'} full={true} width={'100%'} margin={'0'}>
                        <Input/>
                      </SingleWrapper>
                      <SingleWrapper margin_bottom={'0'} label={'Имя'} full={true} width={'100%'} margin={'0'}>
                        <Input/>
                      </SingleWrapper>
                      <SingleWrapper margin_bottom={'0'} label={'Отчество'} full={true} width={'100%'} margin={'0'}>
                        <Input/>
                      </SingleWrapper>
                      <SingleWrapper margin_bottom={'0'} label={'E-mail'} full={true} width={'100%'} margin={'0'}>
                        <Input/>
                      </SingleWrapper>
                      <SingleWrapper margin_bottom={'0'} label={'Телефон '} full={true} width={'100%'} margin={'0'}>
                        <Input/>
                      </SingleWrapper>
                      <SingleWrapper margin_bottom={'0'} label={'Дата рождения'} full={true} width={'100%'} margin={'0'}>
                        <Input/>
                      </SingleWrapper>
                    </div>
                    <div className={styles.order_payment_section_main_upper_traveler_form}>
                      <div className={styles.order_payment_section_main_upper_traveler_form_heading}>
                        Путешественник №2
                      </div>
                      <SingleWrapper margin_bottom={'0'} label={'Фамилия'} full={true} width={'100%'} margin={'0'}>
                        <Input/>
                      </SingleWrapper>
                      <SingleWrapper margin_bottom={'0'} label={'Имя'} full={true} width={'100%'} margin={'0'}>
                        <Input/>
                      </SingleWrapper>
                      <SingleWrapper margin_bottom={'0'} label={'Отчество'} full={true} width={'100%'} margin={'0'}>
                        <Input/>
                      </SingleWrapper>
                      <SingleWrapper margin_bottom={'0'} label={'Дата рождения'} full={true} width={'100%'} margin={'0'}>
                        <Input/>
                      </SingleWrapper>
                    </div>


                  </div>
                </div>

                <div className={styles.order_payment_section_main_upper_traveler_checkbox}>
                  <CheckboxInput label={'Я подтвержаю согласие с условиями публичной оферты и выражаю свое согласие на обработку персональных данных.'}/>
                </div>

                <Button width={'100%'} text={'забронировать'} margin={'0 0 30px 0'}/>

                <div className={styles.order_payment_section_main_upper_traveler_notes}>
                  <div>Если передумаете, то в течение 24 часов после оплаты оформим 100% возврат</div>
                  <div>Никаких скрытых платежей, оплата составит 8 750 ₽</div>
                  <div> Остальная часть должна быть оплачена до 28 июня 2022 года</div>
                </div>




              </div>
              <div className={styles.order_payment_section_sidebar}>
                <div className={styles.order_payment_section_sidebar_section}>
                  <div className={styles.order_payment_section_main_upper_heading}>
                    МОЕ ПУТЕШЕСТВИЕ
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_name}>
                    №28311 Весь Дагестан за 5 дней - Все включено!
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_duration}>
                    5 дней
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_start_finish}>
                    <div>
                      Старт: 28 июня 2021 (Понедельник)
                    </div>
                    <div>
                      Финиш: 2 июля 2021 (Пятница)
                    </div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_travelers}>
                    <div>Количество участников:</div>
                    <div>2</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_price}>
                    <div>Цена за одного</div>
                    <div>35 000р.</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_price}>
                    <div>Комиссия сервиса </div>
                    <div>0</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_total}>
                    <div>Итого:</div>
                    <div>70 000р.</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_deposit}>
                    <div>
                      <div>
                        Депозит
                      </div>
                      <div>
                        К оплате сейчас
                      </div>
                    </div>
                    <div>15 000р.</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_deposit}>
                    <div>
                      <div>
                        Финальная оплата
                      </div>
                      <div>
                        Оплата до 28 июня 2021 года
                      </div>
                    </div>
                    <div>55 000р.</div>
                  </div>
                </div>


                <div className={styles.order_payment_section_sidebar_section}>
                  <div className={styles.order_payment_section_main_upper_heading}>
                    ДЕТАЛИ ПУТЕШЕСТВИЯ
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>Тревел-эксперт</div>
                    <div>Снежанна</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>Язык</div>
                    <div>Русский</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>Уровень активности</div>
                    <div>6/10 - Средний уровень</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>Уровень комфорта</div>
                    <div>6/10 - Средний уровень</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>Включено в заказ:</div>
                    <div>
                      <ul>
                        <li>
                          <img src={ok} alt="ok"/>
                          <div>
                            Встреча в день старта в Махачкале
                          </div>
                        </li>
                        <li>
                          <img src={ok} alt="ok"/>
                          <div>
                            Трансфер на джипах
                          </div>
                        </li>
                        <li>
                          <img src={ok} alt="ok"/>
                          <div>
                            Работа гида
                          </div>
                        </li>
                        <li>
                          <img src={ok} alt="ok"/>
                          <div>
                            Трехразовое питание+перекусы в течение дня, чай/кофе и бонусы от гида;) (голодными Вы точно не останетесь, обещаем!)
                          </div>
                        </li>
                        <li>
                          <img src={ok} alt="ok"/>
                          <div>
                            Проживание на протяжении всего тура
                          </div>
                        </li>
                        <li>
                          <img src={ok} alt="ok"/>
                          <div>
                            Экскурсии
                          </div>
                        </li>
                        <li>
                          <img src={ok} alt="ok"/>
                          <div>
                            Прогулка на катере
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>Не включено в заказ:</div>
                    <div>
                      <ul>
                        <li>
                          <img src={cancel} alt="cancel"/>
                          <div>
                            Авиа/Жд билеты до Махачкалы и обратно
                          </div>
                        </li>
                        <li>
                          <img src={cancel} alt="cancel"/>
                          <div>
                            Личные расходы (сувениры, личные покупки)
                          </div>
                        </li>
                        <li>
                          <img src={cancel} alt="cancel"/>
                          <div>
                            Личные расходы (сувениры, личные покупки)
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderPayment)