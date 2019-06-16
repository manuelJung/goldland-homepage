import * as React from 'react'

export default function LanguageString ({value, onChange}) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if(value) return
    onChange([
      {language: 'en', value: ''},
      {language: 'de', value: ''},
      {language: 'mk', value: ''},
      {language: 'al', value: ''},
    ])
  }, [value, onChange])

  if(!value) return null

  return (
    <div>
      <input style={s.input} value={value[index].value} onChange={handleChange} />
      <div>
        {value.map(({language}) => 
          <button style={s.button} key={language} children={language} />
        )}
      </div>
    </div>
  )
}

const s = {
  button: {
    padding: 10
  },
  input: {
    display: 'block',
    width: '100%',
    boxShadow: 'none',
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(68, 74, 87)',
    position: 'relative',
    fontSize: '15px',
    lineHeight: '1.5',
    padding: '16px 20px',
    margin: '0px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgb(223, 223, 227)',
    borderImage: 'initial',
    borderRadius: '0px 5px 5px',
    outline: '0px',
    transition: 'border-color 0.2s ease 0s'
  }
}