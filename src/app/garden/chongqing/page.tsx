import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '重庆之旅',
};
export default async function ChongqingVlog() {
  
    return (
        <section>
          <h1 className="my-4 font-bold text-4xl">重庆之旅</h1>
          <div className="my-8">
            <video controls width="100%" className="shadow-2xl rounded-lg">
              <source src="https://ihs.grada.pro/ihs/chongqing.MOV"/>
            </video>
          </div>    
        </section>
    )
}
