export default props =>
    {
        return (
          <div>
            <img src={props.imagens[props.valor]} alt={`Dado ${props.valor}`} width={100} />
          </div>
        );
      };