import { ILocationProps, Props } from 'interfaces/interfaces';

const Location = ({ fetchData }: Props): JSX.Element => {
  console.log(fetchData);
  return (
    <>
      {fetchData?.map((location: ILocationProps) => {
        return (
          <div key={location.id}>
            <h2>{location.title}</h2>
            <img
              src={location.imageUrl}
              alt='eriks favorit soffa'
              width={200}
              height={200}
            />
            <p>{location.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Location;
