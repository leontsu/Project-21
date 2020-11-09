function hasCollided (bullet,wall)
{
    bulletRightEdge=bullet.x + bullet.width;
    wallleftEdge = wall.x;

    if (bulletRightEdge >= wallleftEdge)
    {
        return true
    }

    return false;
}