import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '和风细雨咏清泉',
};

export default async function Izumi() {

    return (
        <section>
            <h1 className="font-bold text-3xl">
                和风细雨咏清泉
            </h1>
            <div className="grid grid-cols-[auto_1fr_auto] space-x-2 items-center mt-4 mb-8 text-sm">
                <div className="bg-neutral-100 dark:bg-gray-700 rounded-md px-2 py-1 tracking-tighter">
                    Izumi
                </div>
                <div className="bg-neutral-100 dark:bg-gray-700 rounded-md px-2 py-1 tracking-tighter">
                    2023-05-04
                </div>
            </div>

            <article className="prose dark:prose-invert">
                <h3>咏清泉·毕业有感</h3>
                <p><strong>2023-06-18</strong></p>
                <p>小雏丰羽起青鸢，落笔鸣铃别讲轩。</p>
                <p>烈日晴空绘锦鲤，和风细雨咏清泉。</p>
                
                <h3>风如狼</h3>
                <p><strong>2022-03-03</strong></p>
                <p>风如狼吼雨如帘，奋笔疾书挥汗咸</p>
                <p>蓝水洗磨成瑾玉，凤冠滋养涌清泉</p>
                <p>志存高处龙门远，行在当关蜀道前</p>
                <p>今日长缨手紧握，明朝花飨絮飞天</p>

                <h3>寒假有感</h3>
                <p><strong>2022-03-04</strong></p>
                <p>门前新绿透窗朱，笑语欢声盈盏壶</p>
                <p>火树银花缀锦缎，澄汤翠叶蘸桃酥</p>
                <p>纵横宇上观白兔，阡陌田间谈野狐</p>
                <p>日暖京华风赶马，归来壮志满腹书</p>

                <h3>恶狗·惊蛰有感</h3>
                <p><strong>2022-03-07</strong></p>
                <p>碎雪残冰剩几许，惊雷一叱虫声起</p>
                <p>骄蛮恶狗拦前道，自在鲲鹏腾万里</p>

                <h3>如梦令·厦门地铁</h3>
                <p><strong>2022-03-08</strong></p>
                <p>白鹭红砖绿树，</p>
                <p>林里石间寻路。</p>
                <p>鹏展向何方？</p>
                <p>误入恶龙居处。</p>
                <p>归复，归复。</p>
                <p>长浪起帆拨雾。</p>

                <h3>同舟寄·白夜赤泪</h3>
                <p><strong>2022-05-05</strong></p>
                <p className="text-[#ed5a65]">玲珑玉露金秋</p>
                <p className="text-[#1661ab]">月缀柳梢头，</p>
                <p className="text-[#ed5a65]">长屏掩映，</p>
                <p className="text-[#1661ab]">雁鹊双飞赤泪流</p>
                <p className="text-[#ed5a65]">悠悠</p>
                <br />
                <p className="text-[#ed5a65]">黑风白夜孤楼</p>
                <p className="text-[#1661ab]">雨打苍颜瘦，</p>
                <p className="text-[#ed5a65]">过墙红杏，</p>
                <p className="text-[#1661ab]">绕树三匝素发愁</p>
                <p className="text-[#ed5a65]">休休</p>
            </article>
        </section>
    )
}
