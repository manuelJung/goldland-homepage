import * as React from 'react'

function LanguageString ({value, onChange}) {
  const [index, setIndex] = React.useState(0)

  console.log(value)

  React.useEffect(() => {
    if(value) return
    onChange([
      {language: 'en', value: ''},
      {language: 'de', value: ''},
      {language: 'mk', value: ''},
      {language: 'al', value: ''},
    ])
  }, [value, onChange])

  const handleChange = React.useCallback(e => {
    const row = value[index]
    const newRow = {...row, value: e.target.value}
    let result = []
    value.forEach(row => {
      if(newRow.language === row.language) result.push(newRow)
      else result.push(row)
    })

    onChange(result)
  }, [value, onChange, index])

  if(!value) return null

  return (
    <div>
      <input style={s.input} value={value[index].value} onChange={handleChange} />
      <div>
        {value.map(({language}, i) => 
          <button 
            style={s.button}
            key={language} 
            children={language} 
            onClick={() => setIndex(i)}
          />
        )}
      </div>
    </div>
  )
}

export default class LanguageStingWrapper extends React.Component {
  render = () => <LanguageString {...this.props} />
}

const s = {
  button: {
    padding: 10,
    background: 'none'
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