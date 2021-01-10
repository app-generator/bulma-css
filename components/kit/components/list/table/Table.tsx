import React, { FC } from "react";

const Table = () => {
  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>
            <abbr title="Position">Pos</abbr>
          </th>
          <th>Team</th>
          <th>
            <abbr title="Played">Pld</abbr>
          </th>
          <th>
            <abbr title="Won">W</abbr>
          </th>
          <th>
            <abbr title="Drawn">D</abbr>
          </th>
          <th>
            <abbr title="Lost">L</abbr>
          </th>
          <th>
            <abbr title="Goals for">GF</abbr>
          </th>
          <th>
            <abbr title="Goals against">GA</abbr>
          </th>
          <th>
            <abbr title="Goal difference">GD</abbr>
          </th>
          <th>
            <abbr title="Points">Pts</abbr>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>1</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
              title="Leicester City F.C."
            >
              Leicester City
            </a>{" "}
            <strong>(C)</strong>
          </td>
          <td>38</td>
          <td>23</td>
          <td>12</td>
          <td>3</td>
          <td>68</td>
          <td>36</td>
          <td>+32</td>
          <td>81</td>
        </tr>
        <tr>
          <th>2</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Arsenal_F.C."
              title="Arsenal F.C."
            >
              Arsenal
            </a>
          </td>
          <td>38</td>
          <td>20</td>
          <td>11</td>
          <td>7</td>
          <td>65</td>
          <td>36</td>
          <td>+29</td>
          <td>71</td>
        </tr>
        <tr>
          <th>3</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
              title="Tottenham Hotspur F.C."
            >
              Tottenham Hotspur
            </a>
          </td>
          <td>38</td>
          <td>19</td>
          <td>13</td>
          <td>6</td>
          <td>69</td>
          <td>35</td>
          <td>+34</td>
          <td>70</td>
        </tr>
        <tr className="is-selected">
          <th>4</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
              title="Manchester City F.C."
            >
              Manchester City
            </a>
          </td>
          <td>38</td>
          <td>19</td>
          <td>9</td>
          <td>10</td>
          <td>71</td>
          <td>41</td>
          <td>+30</td>
          <td>66</td>
        </tr>
        <tr>
          <th>5</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
              title="Manchester United F.C."
            >
              Manchester United
            </a>
          </td>
          <td>38</td>
          <td>19</td>
          <td>9</td>
          <td>10</td>
          <td>49</td>
          <td>35</td>
          <td>+14</td>
          <td>66</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
