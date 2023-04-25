import './index.scss';

const btnTypes = [
  'primary',
  'warn',
  'success',
  'danger'
]

function MyButton ({
    type,
    children,
    ...restProps
    
}) {
    const createStyleClasss = () => {
      let _type = btnTypes.includes(type) ? `btn-${_type}` : 'btn-primary';
      return ['btn', _type].join(' ');
    }
    return (
    <div>
      <button 
       {...restProps}
       className={createStyleClasss()}
        >
       {children}
       </button>
    </div>
  );
}


export default MyButton;