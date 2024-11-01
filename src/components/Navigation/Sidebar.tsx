import React from 'react'

export default function Sidebar() {
  return (
    <aside className='w-72 hidden tracking-wide lg:block'>
        <h2 className='mb-1 text-slate-900 text-md font-semibold'>Menu Label 1</h2>
        <ul className='mb-4'>
            <li className='block border-l pl-4 py-1 -ml-px border-slate-400/50 hover:border-slate-400 text-slate-700 hover:text-slate-900'>List Menu 1</li>
            <li className='block border-l pl-4 py-1 -ml-px border-slate-400/50 hover:border-slate-400 text-slate-700 hover:text-slate-900'>List Menu 2</li>
            <li className='block border-l pl-4 py-1 -ml-px border-slate-400/50 hover:border-slate-400 text-slate-700 hover:text-slate-900'>List Menu 3</li>
            <li className='block border-l pl-4 py-1 -ml-px border-slate-400/50 hover:border-slate-400 text-slate-700 hover:text-slate-900'>List Menu 4</li>
        </ul>
        <h2 className='mb-1 text-slate-900 text-md font-semibold'>Menu Label 2</h2>
        <ul className='mb-4'>
            <li className='block border-l pl-4 py-1 -ml-px border-slate-400/50 hover:border-slate-400 text-slate-700 hover:text-slate-900'>List Menu 1</li>
            <li className='block border-l pl-4 py-1 -ml-px border-slate-400/50 hover:border-slate-400 text-slate-700 hover:text-slate-900'>Work Experience</li>
            <li className='block border-l pl-4 py-1 -ml-px border-slate-400/50 hover:border-slate-400 text-slate-700 hover:text-slate-900'>List Menu 3</li>
            <li className='block border-l pl-4 py-1 -ml-px border-slate-400/50 hover:border-slate-400 text-slate-700 hover:text-slate-900'>List Menu 4</li>
        </ul>
    </aside>
  )
}
