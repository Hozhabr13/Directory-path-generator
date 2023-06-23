import React, { useRef, useState } from 'react'
import { DirectoriesProps } from '../types/directories'
import Verdict from './verdict'

const Directories = ({ directories, delFileOrDirectory, addFile, addDirectory }: DirectoriesProps) => {
  const [input, showInput] = useState<any>({
    type: '',
    state: false
  })
  const pathRef = useRef<any>(null)
  const { id } = directories

  const insertAction = (type: string) => {
    switch (type) {
      case 'file': addFile(id, pathRef.current.value)
        showInput({
          type: '',
          state: false
        })
        break
      case 'directory': addDirectory(id, pathRef.current.value)
        showInput({
          type: '',
          state: false
        })
        break
      case 'del': delFileOrDirectory(id)
        break
    }
  }

  const inputController = (type: string) => {
    showInput({
      type,
      state: true
    })
  }

  const Action = () => {
    return (
      !input.state
        ? <div className='action-class'>
        {<Verdict clickHandler={() => insertAction('del')} action="Delete" />}
        <Verdict clickHandler={() => inputController('file')} action="Add File" />
        <Verdict clickHandler={() => inputController('directory')} action="Add Directory" />
      </div>
        : (
          <div>
              <input ref={pathRef} />
              <button onClick={() => showInput({ state: false, type: '' })}>Close</button>
              <button onClick={() => insertAction(input.type)}>Submit</button>
          </div>
          )
    )
  }

  return (
      <>
      <div className={directories.type === 'directory' ? 'directory-item' : 'file-item'}>
      <Action />
        {directories?.children?.map((item: any): any => {
          if (item.type === 'directory') {
            return (
              <>
                <span key={item.id} className='directory-item'>
                    {item.name}
              </span>
                </>
            )
          } else {
            return (
              <>
                <span key={item.id} className='file-item'>
                  {item.name}
                </span>
              </>
            )
          }
        })}

          </div>

          {
        directories?.children?.map((subDirectory: any) => {
          return (
            <div key={subDirectory.id}>
                <Directories directories= {subDirectory} delFileOrDirectory={delFileOrDirectory} addFile={addFile} addDirectory={addDirectory} />
            </div>
          )
        })
        }
    </>
  )
}

export default Directories
