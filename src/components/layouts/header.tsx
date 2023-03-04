import HomeThree from '../three/homeThree'

export function Homeheader() {
  const linkIcon = [
    {
      name: 'github',
      path: 'https://github.com/mz-dfhp'
    },
    {
      name: '掘金',
      path: ''
    },
    {
      name: '知乎',
      path: ''
    }
  ]
  const onGoPath = (path: string) => {
    window.open(path)
  }
  return (
    <div className="relative h-15 bg-main bg-opacity-40 flex items-center p-x-10 text-white">
      <HomeThree />
      <div className="m-l-a flex flex-1 justify-end">
        {linkIcon.map((item) => {
          return (
            <div
              key={item.name}
              className="w-20 text-center cursor-pointer hover-font-bold"
              onClick={() => onGoPath(item.path)}
            >
              {item.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}
