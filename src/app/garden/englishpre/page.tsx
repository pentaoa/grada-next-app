import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legend of Early-Eeight Class',
};
export default async function EnglishPre() {
  
    return (
        <section>
          <h1 className="my-4 font-bold text-4xl">Legend of Early-Eeight Class</h1>
          <div className="my-8">
            <video controls width="100%" className="shadow-2xl rounded-lg">
              <source src="https://ihs-1317591693.cos.ap-guangzhou.myqcloud.com/grdoc/PreVideo.mp4"/>
            </video>
          </div>    
        </section>
    )
}
