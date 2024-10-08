import s from './Item.module.css'

export function Item() {
    return (
        <div className={s.item}>
            <div className={s.img}></div>

            <div className={s.text}>
                <p>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
            </div>

            <div className={s.block}>
                <div className={s.price}>
                    <h2>335</h2>
                    <p>₽</p>
                </div>
                <button className={s.btn}>Добавить в корзину</button>
            </div>
        </div>
    )
}