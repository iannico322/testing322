import PermissionBox from "./permissionbox";
const PermissionManagementPage = () => {
  // useEffect(() => {
  //   console.log(query);
  //   // setSearch(search);
  // }, [query]);

  const data = [
    {
      org: "Prog var",
      accounts: [
        {
          position: "Presedent",
          permission: [0, 1, 1, 1],
        },
        {
          position: "Vice",
          permission: [1, 1, 1, 1],
        },
        {
          position: "Choy",
          permission: [1, 1, 0, 0],
        },
      ],
    },

    {
        org: "Site",
        accounts: [
          {
            position: "Presedent",
            permission: [1, 1, 1, 1],
          },
          {
            position: "Vice",
            permission: [1, 1, 1, 1],
          },
          {
            position: "Kahoy-kahoy",
            permission: [1, 1, 0, 0],
          },
        ],
      },

      {
        org: "JPICE",
        accounts: [
          {
            position: "Presedent",
            permission: [0, 1, 0, 1],
          },
          {
            position: "Vice",
            permission: [0, 0, 1, 1],
          },
          {
            position: "Kahoy-kahoy",
            permission: [1, 1, 0, 0],
          },
        ],
      },
  ];

  return (
    <>
      <div className="flex min-h-[400px]    justify-center w-full  bg-[#E7E7E7] box-border pb-[150px]">
        <div className="flex flex-col gap-10 w-[95%] min-h-[100px]  py-10 mx-5  ">
          {data.map((e) => (
            <PermissionBox name={e.org} accounts={e.accounts} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PermissionManagementPage;
