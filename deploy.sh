

echo "Pre-Build Steps:"
echo "authenticating with AWS ECR..."
aws ecr get-login-password --region us-east-1 --profile profile | docker login --username AWS --password-stdin 407924931842.dkr.ecr.us-east-1.amazonaws.com
echo "Build steps"

docker build -t 407924931842.dkr.ecr.us-east-1.amazonaws.com/mission-5:latest .

echo "Post build steps"
echo "pushing image to AWS ECR"
docker push 407924931842.dkr.ecr.us-east-1.amazonaws.com/mission-5:latest